import MainHeader from "./main-header";

function Layout(props) {
  return (
    <div>
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
