import { FavoriteList } from './(components)';

export default function Favorites() {
  return (
    <div className="container py-4 d-flex flex-column gap-3">
      <h1>Favorites</h1>

      <FavoriteList />
    </div>
  );
}
