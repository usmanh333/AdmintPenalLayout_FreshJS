import Drawer from "./Drawer.tsx";

export default function Home() {
  return (
    <div class={'fixed w-[15%] z-50'}>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <Drawer />
      </div>
      
    </div>
  );
}
