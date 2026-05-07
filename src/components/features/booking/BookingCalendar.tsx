"use client";

import { useState } from "react";
import { format, addDays, isSameDay } from "date-fns";
import { Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const MOCK_SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00"];

export default function BookingCalendar({ doctorId, fee }: { doctorId: string; fee: number }) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);

  const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  const handleBooking = async () => {
    if (!selectedSlot) return;
    setIsBooking(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    toast.success("Appointment request sent successfully!");
    setIsBooking(false);
    setSelectedSlot(null);
  };

  return (
    <div className="space-y-8">
      {/* Date Picker */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">Select Date</p>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {dates.map((date) => (
            <button
              key={date.toString()}
              onClick={() => {
                setSelectedDate(date);
                setSelectedSlot(null);
              }}
              className={`flex-shrink-0 w-16 h-20 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1 ${
                isSameDay(selectedDate, date)
                  ? "bg-white text-slate-900 border-white shadow-lg"
                  : "bg-white/5 border-white/10 text-blue-100 hover:bg-white/10"
              }`}
            >
              <span className="text-[10px] uppercase font-bold opacity-60">{format(date, "EEE")}</span>
              <span className="text-xl font-bold">{format(date, "d")}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Slot Picker */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">Available Slots</p>
        <div className="grid grid-cols-3 gap-3">
          {MOCK_SLOTS.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`py-3 rounded-xl border text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                selectedSlot === slot
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-white/5 border-white/10 text-blue-100 hover:bg-white/10"
              }`}
            >
              <Clock size={14} />
              {slot}
            </button>
          ))}
        </div>
      </div>

      <Button 
        className={`w-full h-16 rounded-2xl text-lg font-bold transition-all ${
          selectedSlot ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-700 text-slate-400"
        }`}
        disabled={!selectedSlot || isBooking}
        onClick={handleBooking}
      >
        {isBooking ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
            <span>Processing...</span>
          </div>
        ) : selectedSlot ? (
          <div className="flex items-center gap-2">
            <Check size={20} />
            <span>Confirm Booking</span>
          </div>
        ) : (
          "Select a time slot"
        )}
      </Button>
    </div>
  );
}
