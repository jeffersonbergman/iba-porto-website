import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { z } from 'zod';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const articleSchema = z.object({
  title: z.string().trim().nonempty({ message: 'Title is required' }).max(200),
  title_en: z.string().trim().max(200).optional(),
  content: z.string().trim().nonempty({ message: 'Content is required' }),
  content_en: z.string().trim().optional(),
  featured_image: z.string().trim().url({ message: 'Must be a valid URL' }).max(500).optional().or(z.literal('')),
  status: z.enum(['draft', 'published']),
});

const AdminArticleForm = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    title_en: '',
    content: '',
    content_en: '',
    featured_image: '',
    status: 'draft' as 'draft' | 'published',
  });

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (id && user && isAdmin) {
      fetchArticle();
    }
  }, [id, user, isAdmin]);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setFormData({
        title: data.title,
        title_en: data.title_en || '',
        content: data.content,
        content_en: data.content_en || '',
        featured_image: data.featured_image || '',
        status: data.status as 'draft' | 'published',
      });
    } catch (error: any) {
      toast.error(t('auth.error') + ': ' + error.message);
      navigate('/admin/articles');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validated = articleSchema.parse(formData);
      setLoading(true);

      const slug = id ? undefined : `${generateSlug(validated.title)}-${Date.now()}`;
      const articleData: any = {
        title: validated.title,
        content: validated.content,
        status: validated.status,
        title_en: validated.title_en || null,
        content_en: validated.content_en || null,
        featured_image: validated.featured_image || null,
        author_id: user?.id,
        published_at: validated.status === 'published' ? new Date().toISOString() : null,
      };
      
      if (!id) {
        articleData.slug = slug;
      }

      if (id) {
        const { error } = await supabase
          .from('articles')
          .update(articleData)
          .eq('id', id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('articles')
          .insert([articleData]);

        if (error) throw error;
      }

      toast.success(t('admin.articleSaved'));
      navigate('/admin/articles');
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error(t('auth.error') + ': ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || (id && loading)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>
                {id ? t('admin.editArticle') : t('admin.newArticle')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">{t('article.title')} *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    maxLength={200}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title_en">{t('article.titleEn')}</Label>
                  <Input
                    id="title_en"
                    value={formData.title_en}
                    onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                    maxLength={200}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="featured_image">{t('article.featuredImage')}</Label>
                  <Input
                    id="featured_image"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    value={formData.featured_image}
                    onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                    maxLength={500}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">{t('article.content')} *</Label>
                  <ReactQuill
                    theme="snow"
                    value={formData.content}
                    onChange={(value) => setFormData({ ...formData, content: value })}
                    className="bg-background"
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link', 'image'],
                        ['clean'],
                      ],
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content_en">{t('article.contentEn')}</Label>
                  <ReactQuill
                    theme="snow"
                    value={formData.content_en}
                    onChange={(value) => setFormData({ ...formData, content_en: value })}
                    className="bg-background"
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link', 'image'],
                        ['clean'],
                      ],
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">{t('article.status')} *</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value: 'draft' | 'published') =>
                      setFormData({ ...formData, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">{t('article.draft')}</SelectItem>
                      <SelectItem value="published">{t('article.published')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" disabled={loading}>
                    {loading ? '...' : t('article.save')}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/admin/articles')}
                  >
                    {t('article.cancel')}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminArticleForm;
