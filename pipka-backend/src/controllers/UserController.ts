import express from "express";

import { UserModel } from "../schemas";

class UserController {
  show(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: "User not found!",
        });
      }
      res.json(user);
    });
  }

  getMe() {
    // Возвращение нашего пользователя
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      name: req.body.name,
      middleName: req.body.middleName,
      surName: req.body.surName,
      email: req.body.email,
      password: req.body.password,
    };

    const user = new UserModel(postData);
    user
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch((reason) => {
        res.json(reason);
      });
  }

  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
      .then((user) => {
        if (user) {
          res.json({
            message: `User - ${user.name} ${user.surName}, deleted!`,
          });
        }
      })
      .catch(() => {
        res.json({
          message: "User not found",
        });
      });
  }
}

export default UserController;
