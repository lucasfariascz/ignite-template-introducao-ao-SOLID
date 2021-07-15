import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  id?: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    this.admin = false;
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
