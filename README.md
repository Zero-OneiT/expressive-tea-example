# Expressive Tea Example

This demo app will bootstrap your development by running a few commands allowing you to focus on your functionality rather than complicated setups.

## Dependencies

```
npm install -g typescript@3.4.5
npm i --save typescript
npm install
```

## Start the project

```
npm run dev
```

Try it out!
 
[http://127.0.0.1:3001/](http://127.0.0.1:3001/)

Pointing out to develop branch, in the `package.json` file under `dependencies` replace the line
```
"@zerooneit/expressive-tea": "0.0.5-Beta",
```

with
```
"@zerooneit/expressive-tea": "github:zero-oneit/expresive-tea#develop",
```