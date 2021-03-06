import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.headers;
      const user = this.listAllUsersUseCase.execute({ user_id });
      return response.send(user);
    } catch (error) {
      return response.status(400).send({ error: "Error ao lista usuario!" });
    }
  }
}

export { ListAllUsersController };
