export interface GetReviews {
  success: boolean;
  message: string;
  data: RoomReview;
}

export interface RoomReview {
  roomReviews: data[];
  totalCount: number;
}

interface data {
  _id: string;
  room: Room;
  user: User;
  rating: number;
  review: string;
  createdAt: string;
  updatedAt: string;
}

interface Room {
  _id: string;
  roomNumber: string;
}

interface User {
  _id: string;
  userName: string;
  profileImage: string;
}
