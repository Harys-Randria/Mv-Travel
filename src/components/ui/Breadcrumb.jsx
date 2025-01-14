import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
  
    // Crée une table de correspondance des noms
    const routeNames = {
      destinations: 'Destinations',
      about: 'About Us',
      tailormadetour: 'Tailor Made Tour',
    };
  
    return (
      <nav >
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="hover:text-orange">
              Home
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;
            const displayName = routeNames[segment] || segment;
  
            return (
              <li key={path} className="flex items-center">
                <span className="mx-2">/</span>
                {isLast ? (
                  <span className=" capitalize">{displayName}</span>
                ) : (
                  <Link to={path} className="hover:text-orange capitalize">
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };
  

export default Breadcrumb;
