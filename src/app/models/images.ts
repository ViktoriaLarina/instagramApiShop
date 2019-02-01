export interface ImagesData {
  data: Image[];
  pagination: any;
  meta: {
    code: number;
  }
}

export interface Image {
  attribution: any;
  caption: any;
  comments: any;
  created_time: string | Date;
  filter: string;
  id: string;
  images: {
    low_resolution: SizeData;
    standard_resolution: SizeData;
    thumbnail: SizeData;
  };
  likes: {
    count: number;
  };
  link: string;
  location: any;
  tags: any[];
  type: string;
  user: User
}

interface User {
  full_name: string;
  id: string;
  profile_picture: string;
  username: string;
  user_has_liked: boolean;
  users_in_photo: any[];
}

interface SizeData {
  width: number;
  url: string;
  height: number;
}
