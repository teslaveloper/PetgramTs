export interface Welcome {
  users:      User[];
  categories: Category[];
  photos:     Photo[];
}

export interface Category {
  id:    number;
  name:  string;
  emoji: string;
  cover: string;
  path:  string;
}

export interface PhotosQueryData {
  photos: Photo[];
};

export interface Photo {
  id:         number;
  categoryId: number;
  src:        string;
  userId:     number;
  likes:      number;
}

export interface Photos {
  photos: Photo[] | [];
};

export interface PhotoVariables {
  categoryId: number;
};


export interface User {
    id:       string;
    password: string;
    favs:     string[];
    avatar:   string;
    email:    string;
}
