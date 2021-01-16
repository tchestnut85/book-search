const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }   

    type Auth {
        token: ID!
        user: User
    }

    type Book {
        bookId: ID
        title: String
        authors: [String]
        description: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(username: String, email: String, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth 
        saveBook(authors: [String]!, description: String!, title: String!, bookId: ID!, image: String!, link: String!): User
        removeBook(bookId: ID!): User
    }

`;

module.exports = typeDefs;