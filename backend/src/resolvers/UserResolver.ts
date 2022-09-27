import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import { randomUUID as uuid } from 'crypto'

@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  async users() {
    return this.data;
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string
  ) {
    const user = {
      id: uuid(),
      name,
    }

    this.data.push(user);

    return user;
  }
}