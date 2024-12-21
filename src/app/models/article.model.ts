interface User {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string | null;
  user_id: number;
  website_url: string | null;
  profile_image: string;
  profile_image_90: string;
}

interface Organization {
  name: string;
  username: string;
  slug: string;
  profile_image: string;
  profile_image_90: string;
}

interface FlareTag {
  name: string;
  bg_color_hex: string;
  text_color_hex: string;
}

export interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: User;
  organization: Organization;
  flare_tag: FlareTag;
}

export interface ArticlePayload {
    per_page: number;
    page: number;
    term?: string; // Search term
}