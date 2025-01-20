import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Mapping routes to display names
  const routeNames = {
    destinations: 'Destinations',
    about: 'About Us',
    tailormadetour: 'Tailor Made Tour',
  };

  return (
    <nav>
      <ol className="flex items-center space-x-2 text-sm max-w-7xl mx-auto">
        <li>
          <Link to="/" className="hover:text-yellow-500">
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
                <span className="capitalize">{displayName}</span>
              ) : (
                <Link to={path} className="hover:text-yellow-500 capitalize">
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
