import { Tool } from "ai-jsx/batteries/use-tools";
import {
  YourSidekickSystemMessage,
  finalSystemMessageBeforeResponse,
} from "./system-message.js";
import { FixieCorpus } from "ai-jsx/batteries/docs";
import { Sidekick } from "ai-jsx/sidekick";

//TODO: Replace with your Fixie Corpus ID
// This Corpus contains information about foxes. Some suggested queries to try once
// you deploy this sidekick are:
//    tell me about foxes and what they eat
//    what is the fennec fox like? how big do they get?
//    who is foxie?
// const FIXIE_CORPUS_ID: string = "44094d5a-f817-4c2e-a2a4-8f8a0c936d0f";
// const FIXIE_CORPUS_ID: string = '286b5a7d-2bcd-483f-aef5-acf157c5aea5'; // GitHub corpus
// const FIXIE_CORPUS_ID: string = '019ee8d1-bf7e-450e-a867-8e2fc5e72cec'; // Redwood corpus
// const FIXIE_CORPUS_ID: string = 'be2e05ba-fb81-485b-8914-9c60a90dbe8e'; // Redwood corpus, simple example by KTE
const FIXIE_CORPUS_ID: string = 'a7c066fe-2756-481f-ae62-660b828b9ee0'; // Redwood corpus, simple example by KTE


if (!FIXIE_CORPUS_ID) {
  throw new Error("Please set a FIXIE_CORPUS_ID in src/index.tsx");
}

const systemMessage = <YourSidekickSystemMessage />;

const tools: Record<string, Tool> = {
  lookUpGitHubKnowledgeBase: FixieCorpus.createTool(
    FIXIE_CORPUS_ID,
    'A tool for looking up additional information to help answer the user query.'
  ),
};
// const tools: Record<string, Tool> = {
//   // TODO: To help the model understand when to call this tool, name the function
//   // something more descriptive like 'lookUpAcmeCompanyKnowledgeBase'.
//   // For more tips on using Tools, see: https://docs.ai-jsx.com/tutorial/part7-tools
//   lookUpKnowledgeBase: FixieCorpus.createTool(
//     FIXIE_CORPUS_ID,
//     "A tool for looking up additional information to help answer the user query."
//   ),
  /*
  anotherPossibleTool: {
    description:
      "Another tool, possibly for calling out to an API",
    parameters: {
      query: {
        description:
          "A parameter for the tool",
        type: "string",
        required: true,
      },
    },
    func: async ({ query }) => {
      return "Hello, world! Your query was: {query}"
    },
  }
  */
// };

export default function SidekickTemplate() {
  return (
    <Sidekick
      // TODO: Give the Sidekick a descriptive role like "A helpful assistant for Acme Company".
      // role="A helpful assistant who is an expert on foxes."
      role="A helpful assistant who is an expert on RedwoodJS."
      systemMessage={systemMessage}
      // tools={tools}
      finalSystemMessageBeforeResponse={finalSystemMessageBeforeResponse}
    />
  );
}
