/* eslint-disable no-irregular-whitespace */
import blog3 from "../Blogs/assets/Blog3.png";
const Blog3 = () => {
  return (
    <div>
      <img src={blog3} alt="" height="220px" />
      <h3>React hooks and how to use them</h3>
      React Hooks​​ are a new addition​​ in React 16.8 that​​ allow you to​​ use
      state and​​ other React features​​ without writing​​ a class. Hooks​​ are
      built-in React​​ functions that​​ allow React developers​​ to use state​​
      and lifecycle​​ methods inside​​ functional components​​. They also work​​
      together with​​ existing code​​, so they can​​ easily be adopted​​ into a
      codebase. In​​ this blog, we​​ will discuss​​ React Hooks and​​ how to use
      them​​.​
      <br />
      <span>
        <b>What are React Hooks?</b>
      </span>
      Hooks are built-in React functions introduced in React version 16.8. They
      allow you to use features of the React library like lifecycle methods,
      state, and context in functional components without having to worry about
      rewriting it to a class. Each React Hook name is prefixed with the word
      and can be used to add functionality to your React components.
      <br />
      <span>
        <b>Basic React Hooks</b>
      </span>
      <b>useState()</b>
      The useState Hook allows you to create, update, and manipulate state
      inside functional components. It takes an initial state value and returns
      an array containing the current state value and a function to update the
      state value.
      <b>useEffect</b>
      The useEffect Hook allows you to perform side effects in your functional
      components. It takes a function that performs the side effect and an
      optional array of dependencies. The function is called after every render,
      and the dependencies array determines when the function should be called.
      <b>useContext</b>
      The useContext Hook allows you to access context in your functional
      components. It takes a context object and returns the current context
      value.
      <b>Benefits of React Hooks</b>
      React Hooks provide several benefits, including: Improved code reuse
      Better code composition Easier to understand and maintain code Improved
      performance Reduced complexity
    </div>
  );
};

export default Blog3;
