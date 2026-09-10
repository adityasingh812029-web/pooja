import { create } from 'zustand';

interface StoreState {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  cartCount: number;
  incrementCart: () => void;
  // Booking state can go here
  bookingStep: number;
  setBookingStep: (step: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  cartCount: 0,
  incrementCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
  bookingStep: 1,
  setBookingStep: (step) => set({ bookingStep: step }),
}));
