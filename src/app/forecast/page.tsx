import s from './page.module.scss';

export default function Forecast() {
  return (
    <div className="container py-4 d-flex flex-column gap-3">
      <h1>Subotica, RS</h1>

      <div className={ s.list }>
        {
          ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'San', 'Mon'].map((item) => (
            <div key={ item } className={ s.day }>
              <div>
                { item }
              </div>

              <div>
                3&deg;C
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
