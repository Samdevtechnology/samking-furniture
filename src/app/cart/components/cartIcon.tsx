import IconBtnWrap from "@/utils/IconBtnWrap";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Badge } from "@/utils/MuiServerComponent";

const CartIcon = () => {
  return (
    <IconBtnWrap
      bg="bg-white"
      size={12}
      className="rounded-full overflow-visible"
      href="/cart"
    >
      <Badge content={7} color="orange">
        <ShoppingBagIcon className="w-7 h-7" />
      </Badge>
    </IconBtnWrap>
  );
};

export default CartIcon;
