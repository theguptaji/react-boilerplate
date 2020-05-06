# Robofriends

## Quick starters

To get started after cloning
```
npm install
npm start
```

To deploy on github pages
First update `package.json` with the hostname.
```
npm run deploy
```

To update packages
```
npm update
npm audix 
npm audit fix
```

## Redux

This project use redux for state-management.   
Why Redux?   
* Redux allows to change state in a `flux-architecture`. all the changes triggered by actions passes through a pipeline like this:
  ```node
   Action --> middleware --> reducer --> Redux-store --> make-changes
  ```
* and then the changed state is passed on to the components/functions via props, so we can simply destructure props like this:
  ```react
  const { robots, searchfield, ..(all the state components)} = this.props
  ```
