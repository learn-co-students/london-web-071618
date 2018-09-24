## How to run
```bash
npm i && npm start
```

## Task
Look at the logs to see what's going on.

The component heirarchy is Grandparent -> Parent -> Child, and you can see in which order each of "constructor", "render", and "componentDidMount" are called.

Each component renders after it is constructed. However, it is not considered "mounted" until all of its children are mounted.

Feel free to play with the structure to see what's going on!
