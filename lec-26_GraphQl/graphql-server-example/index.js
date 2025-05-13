import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//data set
let books= [
    {
        id:1,
        title:"Book1",
        author:"Nitesh"
    },
    {   id:2,
        title:"Book2",
        author:"Ritik"
    },
]
let authors=[
    {
        id:1,
        name:"Nitesh",
        email:"Nitesh8174@gmail.com",
        password:"1234"
    },
    {
        id:2,
        name:"Nite",
        email:"Nith8174@gmail.com",
        password:"12345"
    }
]

// all type defination
const typeDefs=`
    #this is a comment
    type Book{
        id:ID,
        title:String,
        author:String
    }
    type Author{
        id:ID
        name:String,
        email:String,
        password:String
    }
    
    type Query{
        Books: [Book],
        Authors:[Author],
        Author(id:ID):Author
    }

    type Mutation{
        Books:[Book]
        
    }
`

//resolver for query and mutation
const resolvers = {
    Query: {
      Books: () =>{
        return books;
      } ,
      Authors:()=> authors,
      Author:(parent, args)=>{
        
        let autharr= authors.filter((author)=> author.id==Number(args.id))
        return autharr[0];
      }
    },
    Mutation:{
        Books:(parent,args)=>{

        }
    }
   
  };







  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);