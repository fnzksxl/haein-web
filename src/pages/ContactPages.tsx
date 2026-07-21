import { PageHero } from "../components/layout"
import { Check, Copy, Mail, MapPin, Phone, X } from "lucide-react"
import { type FormEvent, useRef, useState } from "react"

export function LocationPage() {
  return (
    <main>
      <PageHero
        eyebrow=""
        title=""
        body="부산 평가사무소를 중심으로 서울, 통영 거점에서 전국 프로젝트 현장에 대응합니다."
        intro={{ section: "Contact / Location", title: "찾아오시는 길" }}
        image="/contact/hero.png"
      />
      <section className="bg-sky-50 px-5 pb-20 pt-10 md:px-24 md:pb-24 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <div
            data-reveal="up"
            className="overflow-hidden rounded-lg border border-sky-100 bg-white shadow-sm"
          >
            <iframe
              className="h-[520px] w-full md:h-[640px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%88%98%EC%98%81%EA%B5%AC%20%EA%B4%91%EB%82%A8%EB%A1%9C%2044&t=&z=16&ie=UTF8&iwloc=&output=embed"
              title="부산 평가사무소 지도"
            />
            <div className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-black text-haein-500">
                  BUSAN OFFICE
                </p>
                <p className="mt-1 font-black text-haein-950">
                  부산광역시 수영구 광남로 44 남성빌딩 2층/4층
                </p>
              </div>
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-haein-700 px-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-haein-300"
                href="https://maps.google.com/?q=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%88%98%EC%98%81%EA%B5%AC%20%EA%B4%91%EB%82%A8%EB%A1%9C%2044"
                rel="noreferrer"
                target="_blank"
              >
                지도 보기
              </a>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "부산 평가사무소",
                "부산광역시 수영구 광남로 44 남성빌딩 2층/4층",
                "051-628-3600",
                "haein@haeineco.kr",
              ],
              [
                "서울 사무소",
                "서울특별시 동대문구 왕산로 200 청량리역 롯데캐슬 SKY-L65 오피스텔",
                "051-628-3600",
                "haein@haeineco.kr",
              ],
              ["통영 사무소", "경상남도 통영시 소재"],
            ].map(([title, address, phone, email], index) => (
              <article
                key={title}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-900/5"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-haein-700 via-sky-400 to-cyan-300" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black tracking-[0.16em] text-haein-500">
                      OFFICE 0{index + 1}
                    </p>
                    <h2 className="mt-2 text-xl font-black text-haein-950">
                      {title}
                    </h2>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sky-50 text-haein-700 transition group-hover:bg-haein-700 group-hover:text-white">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-6 flex flex-1 items-start gap-3 rounded-xl bg-slate-50/80 p-4">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-sky-500"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-black tracking-wide text-slate-400">
                      주소
                    </p>
                    <address className="mt-1 break-words text-sm not-italic leading-6 text-slate-600">
                      {address}
                    </address>
                  </div>
                </div>

                <div className="mt-4 grid gap-1 border-t border-sky-100 pt-4">
                  {phone ? (
                    <a
                      className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-bold text-haein-700 transition hover:bg-sky-50 hover:text-haein-500"
                      href={`tel:${phone.replaceAll("-", "")}`}
                    >
                      <Phone className="size-4" aria-hidden="true" />
                      {phone}
                    </a>
                  ) : null}
                  {email ? (
                    <a
                      className="flex min-w-0 items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-bold text-haein-700 transition hover:bg-sky-50 hover:text-haein-500"
                      href={`mailto:${email}`}
                    >
                      <Mail className="size-4 shrink-0" aria-hidden="true" />
                      <span className="break-all">{email}</span>
                    </a>
                  ) : (
                    <p className="px-2 py-1.5 text-sm leading-6 text-slate-400">
                      상세 위치와 방문 일정은 부산 평가사무소로 문의해 주세요.
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export function ProjectInquiryPage() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [draft, setDraft] = useState({ subject: "", body: "" })
  const [copyStatus, setCopyStatus] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const company = String(form.get("company") ?? "").trim()
    const manager = String(form.get("manager") ?? "").trim()
    const phone = String(form.get("phone") ?? "").trim()
    const email = String(form.get("email") ?? "").trim()
    const location = String(form.get("location") ?? "").trim()
    const inquiry = String(form.get("inquiry") ?? "").trim()

    setDraft({
      subject: `[프로젝트 상담 요청] ${company} | ${location}`,
      body: [
        "안녕하세요.",
        "해인생태연구소 담당자님께 프로젝트 상담을 요청드립니다.",
        "",
        "[문의자 정보]",
        `- 회사명: ${company}`,
        `- 담당자: ${manager}`,
        `- 연락처: ${phone}`,
        `- 이메일: ${email}`,
        "",
        "[프로젝트 정보]",
        `- 프로젝트 위치: ${location}`,
        "",
        "[상담 요청 내용]",
        inquiry,
        "",
        "검토 후 위 연락처 또는 이메일로 회신 부탁드립니다.",
        "감사합니다.",
        "",
        `${company} ${manager} 드림`,
        "",
        "---",
        "본 메일은 해인생태연구소 웹사이트 문의 양식으로 작성되었습니다.",
      ].join("\n"),
    })
    setCopyStatus("")

    // ponytail: 테스트용 강제 폴백. /api/contact 연결 후 전송 실패 분기로 이동합니다.
    dialogRef.current?.showModal()
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(
        `받는 사람: haein@haeineco.kr\n제목: ${draft.subject}\n\n${draft.body}`,
      )
      setCopyStatus("메일 내용을 복사했습니다.")
    } catch {
      setCopyStatus("복사하지 못했습니다. 아래 내용을 직접 선택해 주세요.")
    }
  }

  return (
    <main>
      <PageHero
        eyebrow=""
        title=""
        body="사업 위치, 조사 분야, 일정, 필요한 인허가 단계를 공유해주시면 적합한 조사·분석 범위를 정리합니다."
        intro={{ section: "Contact / Project Inquiry", title: "프로젝트 문의" }}
        image="/contact/hero.png"
      />
      <section className="bg-slate-50 px-5 pb-20 pt-10 md:px-24 md:pb-24 md:pt-12">
        <div className="mx-auto max-w-7xl">
          {" "}
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                "01",
                "프로젝트 범위 공유",
                "사업 위치, 조사 분야, 일정, 필요한 인허가 단계를 알려주세요.",
              ],
              [
                "02",
                "조사·분석 범위 검토",
                "해양생태, 육상생태, 조류, 수중소음, 해양화학 등 필요한 업무를 정리합니다.",
              ],
              [
                "03",
                "작업 방식 제안",
                "현장 조사 일정과 보고 산출물 기준에 맞춰 수행 계획을 제안합니다.",
              ],
            ].map(([num, title, body]) => (
              <article
                key={num}
                data-reveal="up"
                className="shine-card rounded-lg border border-sky-100 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sm font-black text-haein-700">
                  {num}
                </span>
                <h2 className="mt-2 text-xl font-black text-haein-950">
                  {title}
                </h2>
                <p className="mt-3 leading-7 text-slate-500">{body}</p>
              </article>
            ))}
          </div>
          <div
            data-reveal="up"
            className="mt-8 rounded-2xl border border-sky-100 bg-white p-7 text-haein-950 shadow-xl shadow-haein-950/10 md:p-9"
          >
            <div className="border-b border-sky-100 pb-6">
              <p className="text-sm font-black uppercase tracking-widest text-haein-500">
                Send a Brief
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight">
                상담에 필요한 정보를 남겨주세요.
              </h2>
              <p className="mt-3 leading-7 text-slate-500">
                확인 후 담당자가 프로젝트 특성에 맞는 조사·분석 범위를
                안내드립니다.
              </p>
            </div>
            <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["company", "회사명", "text", "organization"],
                  ["manager", "담당자명", "text", "name"],
                  ["phone", "연락처", "tel", "tel"],
                  ["email", "이메일", "email", "email"],
                ].map(([name, label, type, autoComplete]) => (
                  <label
                    key={name}
                    className="grid gap-2 text-sm font-black text-haein-950"
                  >
                    {label}
                    <input
                      name={name}
                      type={type}
                      autoComplete={autoComplete}
                      required
                      className="min-h-12 rounded-lg border border-sky-100 bg-slate-50 px-4 text-haein-950 outline-none transition placeholder:text-slate-400 focus:border-haein-500 focus:bg-white"
                      placeholder={label}
                    />
                  </label>
                ))}
              </div>
              <label className="grid gap-2 text-sm font-black text-haein-950">
                프로젝트 위치
                <input
                  name="location"
                  required
                  className="min-h-12 rounded-lg border border-sky-100 bg-slate-50 px-4 text-haein-950 outline-none transition placeholder:text-slate-400 focus:border-haein-500 focus:bg-white"
                  placeholder="예: 부산광역시 수영구"
                />
              </label>
              <label className="grid gap-2 text-sm font-black text-haein-950">
                문의 내용
                <textarea
                  name="inquiry"
                  required
                  className="min-h-36 rounded-lg border border-sky-100 bg-slate-50 px-4 py-3 text-haein-950 outline-none transition placeholder:text-slate-400 focus:border-haein-500 focus:bg-white"
                  placeholder="조사 분야, 일정, 필요한 산출물을 적어주세요."
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-haein-700 px-5 font-black text-white transition hover:-translate-y-1 hover:bg-haein-300"
              >
                상담 메일 보내기
              </button>
            </form>
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        aria-labelledby="mail-fallback-title"
        aria-describedby="mail-fallback-description"
        className="w-[min(92vw,680px)] rounded-3xl bg-white p-0 text-haein-950 shadow-2xl backdrop:bg-haein-950/75 backdrop:backdrop-blur-sm"
        onClick={(event) =>
          event.target === event.currentTarget && dialogRef.current?.close()
        }
      >
        <div className="relative p-6 md:p-8">
          <button
            type="button"
            aria-label="메일 안내 닫기"
            className="absolute right-5 top-5 grid size-10 place-items-center rounded-full text-slate-400 transition hover:bg-sky-50 hover:text-haein-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-haein-500"
            onClick={() => dialogRef.current?.close()}
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          <span className="grid size-12 place-items-center rounded-full bg-sky-50 text-haein-700">
            <Mail className="size-5" aria-hidden="true" />
          </span>
          <p className="mt-5 text-xs font-black tracking-[0.18em] text-haein-500">
            EMAIL FALLBACK
          </p>
          <h2
            id="mail-fallback-title"
            className="mt-2 pr-10 text-2xl font-black leading-tight md:text-3xl"
          >
            메일 내용을 준비했습니다
          </h2>
          <p
            id="mail-fallback-description"
            className="mt-3 leading-7 text-slate-500"
          >
            자동 전송을 사용할 수 없어 작성하신 내용으로 메일 초안을
            만들었습니다.<br></br>
            아래 내용을 복사해 직접 보내주시면 감사하겠습니다.
          </p>

          <div className="mt-6 grid gap-4 rounded-2xl border border-sky-100 bg-slate-50 p-4 md:p-5">
            <label className="grid gap-2 text-xs font-black text-slate-500">
              받는 사람
              <input
                readOnly
                value="haein@haeineco.kr"
                className="min-h-11 rounded-lg border border-sky-100 bg-white px-3 text-sm font-bold text-haein-950 outline-none focus:border-haein-500"
                onFocus={(event) => event.currentTarget.select()}
              />
            </label>
            <label className="grid gap-2 text-xs font-black text-slate-500">
              제목
              <input
                readOnly
                value={draft.subject}
                className="min-h-11 rounded-lg border border-sky-100 bg-white px-3 text-sm text-haein-950 outline-none focus:border-haein-500"
                onFocus={(event) => event.currentTarget.select()}
              />
            </label>
            <label className="grid gap-2 text-xs font-black text-slate-500">
              본문
              <textarea
                readOnly
                value={draft.body}
                className="min-h-56 resize-y rounded-lg border border-sky-100 bg-white p-3 text-sm leading-6 text-haein-950 outline-none focus:border-haein-500"
                onFocus={(event) => event.currentTarget.select()}
              />
            </label>
          </div>

          <p className="mt-3 min-h-6 text-sm text-slate-500" aria-live="polite">
            {copyStatus}
          </p>
          <div className="mt-2 grid gap-3 sm:grid-cols-[1fr_auto]">
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-haein-700 px-5 font-black text-white transition hover:bg-haein-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-haein-500 focus-visible:ring-offset-2"
              onClick={copyDraft}
            >
              {copyStatus === "메일 내용을 복사했습니다." ? (
                <Check className="size-4" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
              전체 내용 복사
            </button>
            <button
              type="button"
              className="min-h-12 rounded-lg border border-sky-100 px-5 font-black text-slate-600 transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-haein-500"
              onClick={() => dialogRef.current?.close()}
            >
              닫기
            </button>
          </div>
        </div>
      </dialog>
    </main>
  )
}
