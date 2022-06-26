import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

const resolversArray = loadFilesSync(path.resolve('./**/*.resolvers.*'));
// const resolvers = mergeResolvers(resolversArray);

export default resolversArray;