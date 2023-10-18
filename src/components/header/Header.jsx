const Header = () => {
     return (
       <nav className="blue lighten-2">
         <div className="nav-wrapper">
           <a href="/" className="brand-logo">
             React Shop
           </a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li>
               <a
                 href="https://github.com/Botirjon0708/React-Shop"
                 target="_blank"
                 rel="noreferrer">
                 Repo
               </a>
             </li>
           </ul>
         </div>
       </nav>
     );
}

export {Header}