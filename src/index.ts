
import { Resolvers } from './graphql/generated/graphql'
import { readFileSync } from 'node:fs'
import express, { Express } from "express"
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf8')
 
const users = [
  {
    "id": "1",
    "name": "Alice",
    "email": "alice@example.com",
    "age": 28,
    "posts": [
      {
        "id": "101",
        "title": "GraphQL Basics",
        "content": "Introduction to GraphQL concepts and queries."
      },
      {
        "id": "102",
        "title": "React Hooks",
        "content": "Exploring state and effect hooks in React."
      }
    ]
  },
  {
    "id": "2",
    "name": "Bob",
    "email": "bob@example.com",
    "age": 35,
    "posts": [
      {
        "id": "103",
        "title": "Node.js Essentials",
        "content": "Building scalable server-side applications with Node.js."
      },
      {
        "id": "104",
        "title": "Databases and SQL",
        "content": "Fundamentals of relational databases and SQL queries."
      }
    ]
  },
  {
    "id": "3",
    "name": "Charlie",
    "email": "charlie@example.com",
    "age": 42,
    "posts": [
      {
        "id": "105",
        "title": "REST API Design",
        "content": "Best practices for designing RESTful APIs."
      }
    ]
  },
  {
    "id": "4",
    "name": "David",
    "email": "david@example.com",
    "age": 31,
    "posts": [
      {
        "id": "106",
        "title": "Mobile App Development",
        "content": "Building cross-platform mobile apps using React Native."
      }
    ]
  },
  {
    "id": "5",
    "name": "Eva",
    "email": "eva@example.com",
    "age": 29,
    "posts": [
      {
        "id": "107",
        "title": "Web Security",
        "content": "Common security threats and best practices for web applications."
      }
    ]
  }
]



const resolvers: Resolvers = {
  Query:{
    users: ()=> users
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await server.start()
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
