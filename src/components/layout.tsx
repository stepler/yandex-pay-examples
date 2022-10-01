export default function Layout({ children }) {
  return (
    <main>
      <img
        src="https://yastatic.net/s3/pay-static/icons/yandex-pay.svg"
        style={{ width: 300, height: 100 }}
        alt="Yandex Pay"
      />
      <div>{children}</div>
    </main>
  );
}
