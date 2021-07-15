import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;
      const userAdmin = this.turnUserAdminUseCase.execute({ user_id });
      return response.send(userAdmin);
    } catch (error) {
      return response
        .status(404)
        .send({ error: "Error ao encontrar usuário!" });
    }
  }
}

export { TurnUserAdminController };
