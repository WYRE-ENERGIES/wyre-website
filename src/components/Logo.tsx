
const Logo = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      {isDark ? (
        <img src="/img/wyre-purple-logo.png" alt="Logo" width={100} height={100} />
      ) : (
        <img src="/img/wyre-logo-white.png" alt="Logo" width={100} height={100} />
      )}
    </div>
  )
}

export default Logo
