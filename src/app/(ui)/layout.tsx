type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main>
      <section>...</section>
      <section>{children}</section>
      <aside>...</aside>
    </main>
  );
}
