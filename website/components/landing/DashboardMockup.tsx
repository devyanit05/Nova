export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[920px]">
      <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#7C6CF2]/12 via-transparent to-[#8FD3D3]/16 blur-2xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_30px_80px_rgba(31,41,55,0.08)]">
        <div className="flex items-center gap-2 border-b border-[#E5E7EB] bg-[#F8F7F5] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8B4A0]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8FD3D3]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#7C6CF2]/50" />
          <span className="ml-3 font-heading text-xs tracking-wide text-[#6B7280]">
            Nova — Today
          </span>
        </div>

        <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-[200px_1fr]">
          <aside className="hidden border-r border-[#E5E7EB] bg-[#FBFBFA] p-5 md:block">
            <p className="font-heading text-sm font-semibold text-[#1F2937]">✦ Nova</p>
            <ul className="mt-6 space-y-1 text-[13px]">
              {[
                ["Dashboard", true],
                ["Life", false],
                ["Finance", false],
                ["Career", false],
                ["Health", false],
                ["Learning", false],
                ["Recharge", false],
              ].map(([label, active]) => (
                <li
                  key={String(label)}
                  className={
                    active
                      ? "rounded-xl bg-white px-3 py-2 font-medium text-[#1F2937] shadow-[0_4px_16px_rgba(31,41,55,0.04)]"
                      : "rounded-xl px-3 py-2 text-[#6B7280]"
                  }
                >
                  {label}
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-4 p-5 sm:p-6">
            <div>
              <p className="text-xs tracking-wide text-[#6B7280]">Monday · 17 August</p>
              <h3 className="mt-1 font-heading text-xl font-semibold text-[#1F2937]">
                Good morning.
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              {[
                ["Health", "82%", "#8FD3D3"],
                ["Career", "64%", "#7C6CF2"],
                ["Learning", "90%", "#7C6CF2"],
                ["Finance", "55%", "#8FD3D3"],
              ].map(([name, pct, color]) => (
                <div key={name} className="rounded-2xl border border-[#E5E7EB] bg-[#F8F7F5] p-3">
                  <p className="text-[11px] text-[#6B7280]">{name}</p>
                  <p className="mt-1 font-heading text-lg font-semibold text-[#1F2937]">{pct}</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white">
                    <div
                      className="h-full rounded-full"
                      style={{ width: pct, background: color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E7EB] p-4 lg:col-span-2">
                <p className="text-xs font-medium text-[#6B7280]">Today’s focus</p>
                <ul className="mt-3 space-y-2 text-sm text-[#1F2937]">
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border border-[#7C6CF2]" />
                    Finish the Kubernetes lab
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-[#8FD3D3]/70" />
                    Drink 2.5L water
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border border-[#E5E7EB]" />
                    Read 15 pages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border border-[#E5E7EB]" />
                    Evening walk
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] p-4">
                <p className="text-xs font-medium text-[#6B7280]">Water</p>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < 5
                          ? "h-7 rounded-full bg-[#8FD3D3]"
                          : "h-7 rounded-full border border-[#E5E7EB] bg-[#F8F7F5]"
                      }
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-[#6B7280]">5 / 8 glasses</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E7EB] p-4">
                <p className="text-xs font-medium text-[#6B7280]">Journal</p>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#6B7280]">
                  Grateful for a quiet morning and a desk that already knows the day…
                </p>
              </div>
              <div className="rounded-2xl border border-[#E5E7EB] p-4">
                <p className="text-xs font-medium text-[#6B7280]">Finance</p>
                <p className="mt-2 font-heading text-lg font-semibold text-[#1F2937]">₹18,400</p>
                <p className="text-xs text-[#6B7280]">remaining this month</p>
              </div>
              <div className="rounded-2xl border border-[#E5E7EB] p-4">
                <p className="text-xs font-medium text-[#6B7280]">Reading</p>
                <p className="mt-2 text-sm text-[#1F2937]">The Creative Act</p>
                <p className="text-xs text-[#6B7280]">15 / 40 pages today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
