const IconBadge = ({ count, children }) => {
  return (
    <div className="relative">
      {children}
      {count > 0 && (
        <div className="absolute bottom-2 left-3 bg-red-500 text-white rounded-full px-1 h-4 flex items-center justify-center text-xs">
          {count < 10 ? count : "9+"}
        </div>
      )}
    </div>
  );
};

export default IconBadge;
