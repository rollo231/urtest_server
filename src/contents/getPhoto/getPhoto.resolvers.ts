import client from "../../client";
import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Query: {
    getPhoto: protectedResolver((_, { contentId }) =>
      client.photo.findMany({
        where: {
          contentId,
        },
      })
    ),
  },
};

export default resolvers;