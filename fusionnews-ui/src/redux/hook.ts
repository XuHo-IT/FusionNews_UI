import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import type { RootState, AppDistpatch } from "./store";

export const useAppDispatch: () => AppDistpatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;