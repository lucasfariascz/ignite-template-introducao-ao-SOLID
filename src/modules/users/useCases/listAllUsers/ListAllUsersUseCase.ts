import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userAlreadyAdmin = this.usersRepository.findById(user_id);
    if (!userAlreadyAdmin.admin) {
      throw new Error("User not is Admin!");
    }
    const response = this.usersRepository.list();
    return response;
  }
}

export { ListAllUsersUseCase };
