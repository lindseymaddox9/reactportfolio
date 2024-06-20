import Nav from "./nav";

function Header() {
  return (
    <section>
      <h1 className="main-name">Lindsey Maddox</h1>
      <div>
        <img
          src="https://img.freepik.com/free-psd/magnolia-flower-png-isolated-transparent-background_191095-11898.jpg?t=st=1718912698~exp=1718916298~hmac=0fb98484af0094d8e6df2ac0e30d679a845e1c07236a88d96e8aee36db0a6447&w=826"
        />
      </div>
      <Nav />
    </section>
  );
}
export default Header;
