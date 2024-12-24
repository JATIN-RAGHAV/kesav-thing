const BuyButton = ({ height, width }: { height: string, width: string }) => {
  return (
    <div className={`text-white bg-red-600 h-[${height}] w-[${width}]`}>
      BUY NOW
    </div>
  )
}

export default BuyButton;
