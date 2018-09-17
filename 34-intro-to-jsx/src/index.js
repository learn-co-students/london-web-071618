// Intro to JSX

// Here are some elements put inside variables
const Title = props => {
  return React.createElement(
    'h1',
    { className: 'title', id: props.id },
    props.text
  )
} 

const Subtitle = React.createElement(
  'h2',
  { className: 'subtitle', id: '2' },
  "You're gonna love it!"
)

// Here's our custom createElement function!
const createElement = (type, props = {}, children) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type,
    props: { children: children },
    ref: null
  }
}

// Here's a hardcoded element
// We would need to rewrite this one thig every time we want an article
// Is there a better way?
const article = React.createElement('div', { className: 'article' }, [
  React.createElement('h1', { className: 'header' }, 'Welcome to React!'),
  React.createElement('p', { className: 'body' }, 'Have fun!')
])

// Yup, there is. We can turn this into a function,
// and just pass the parameters we want to be dynamic, like *title* and *text*
const Article = props => {
  return React.createElement('div', { className: 'article' }, [
    React.createElement('h1', { className: 'header' }, props.title),
    React.createElement('p', { className: 'body' }, props.text)
  ])
}

// *props* is just a JS object with some keys and values, like this:
const props = {
  title: 'nice!',
  text: "Hello there!"
}

// Here's some HTML I'd like to put on the page
// This will represent a Navbar in my app

// <div class="ui inverted orange menu">
//     <a class='item'>
//       <h2 class="ui header">
//         <i class="paw icon"></i>
//         <div class="content">
//           ZooKeepr
//         </div>
//         <div class="sub header">
//           Keep track of your animals
//         </div>
//       </h2>
//     </a>
//   </div>

// And here's a reusable Navbar component (without JSX)
// Can you imagine having to write all this by hand each time?
const Navbar = props => {
  return React.createElement(
    'div',
    { className: `ui inverted ${props.color} menu` },
    React.createElement(
      'a',
      { className: 'item' },
      React.createElement(
        'h2',
        { className: 'ui header' },
        [
          React.createElement(
            'i',
            { className: `${props.icon} icon` }
          ),
          React.createElement(
            'div',
            { className: 'content' },
            props.content
          ),
          React.createElement(
            'div',
            { className: 'sub header' },
            props.subHeader
          )
        ]
      )
    )
  )
}

// App is a variable that contains all of out application info
const App = React.createElement(
  'div',
  {className: 'app'},
  [
    Navbar({
      color: 'blue',
      icon: 'car',
      content: 'React stuff',
      subHeader: 'Deal with it'
    }),
    Article({title: 'How to survive Flatiron', text: 'Good luck!'}),
    Article({title: 'How to survive Flatiron part 2', text: 'Better luck!'}),
    Article({title: 'How to survive Flatiron part 3', text: 'Best of luck!'}),
    Navbar({
      color: 'red',
      icon: 'paw',
      content: 'The end',
      subHeader: 'Tada!'
    }),
  ]
)

// Finally, we just call ReactDOM.render
// to append that App variable inside the #root div on the HTML page
ReactDOM.render(
  App,
  document.querySelector('#root')
)
