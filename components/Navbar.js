import Link from 'next/link'
const Navbar = () => {
    return ( 
        <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {/* for mobile */}
            <li><a>News</a></li>
            <li><a>Coronavirus</a></li>
            <li><a>Sports</a></li>
            <li> <Link className='link' href="/business"><a>Business</a></Link></li>
            <li><a>Entertainment</a></li>
            <li><a>Life & Living</a></li>
            <li><a>Youth</a></li>
            <li><a>Environment</a></li>
            <li tabindex="0">
              <a>
              Opinion
                {/* <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> */}
              </a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Tech & Startup</a></li>
            </ul>
          </div>
          <Link href="/">
          <a class="btn btn-ghost normal-case text-xl">Daily News</a>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
          <li><Link className='link' href="/navba"><a>News</a></Link></li>
            
            <li><a>Coronavirus</a></li>
            <li><a>Sports</a></li>
            <li> <Link className='link' href="/business"><a>Business</a></Link></li>
            <li><a>Entertainment</a></li>
            <li><a>Life & Living</a></li>
            <li><a>Youth</a></li>
            <li><a>Environment</a></li>
            <li tabindex="0">
              <a>
              Opinion
                {/* <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> */}
              </a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Tech & Startup</a></li>
            
          </ul>
        </div>
        {/* <div class="navbar-end">
          
        </div> */}
      </div>
     );
}
 
export default Navbar;
