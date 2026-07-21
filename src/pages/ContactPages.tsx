import { PageHero } from "../components/layout"

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
                  부산광역시 수영구 광남로 44
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
                "부산광역시 수영구 광남로 44",
                "051-628-3600",
                "haein@haeineco.kr",
              ],
              [
                "서울 사무소",
                "서울특별시 동대문구 왕산로 200 청량리역롯데캐슬SKY-L65오피스텔",
                "051-628-3600",
                "haein@haeineco.kr",
              ],
              ["통영 사무소", "경상남도 통영시 소재"],
            ].map(([title, address, phone, email], index) => (
              <article
                key={title}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                className="shine-card overflow-hidden rounded-lg border border-sky-100 bg-white p-6 shadow-sm"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <p className="text-sm font-black text-haein-500">
                  OFFICE 0{index + 1}
                </p>
                <h2 className="mt-2 text-xl font-black text-haein-950">
                  {title}
                </h2>
                <dl className="mt-5 grid gap-3 border-t border-sky-100 pt-5">
                  <div>
                    <dt className="text-xs font-black uppercase tracking-wide text-slate-400">
                      Address
                    </dt>
                    <dd className="mt-1 leading-7 text-slate-600">{address}</dd>
                  </div>
                  {phone ? (
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-xs font-black uppercase tracking-wide text-slate-400">
                        Phone
                      </dt>
                      <dd>
                        <a
                          className="font-black text-haein-700 hover:text-haein-500"
                          href={`tel:${phone.replaceAll("-", "")}`}
                        >
                          {phone}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                  {email ? (
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-xs font-black uppercase tracking-wide text-slate-400">
                        Email
                      </dt>
                      <dd>
                        <a
                          className="font-black text-haein-700 hover:text-haein-500"
                          href={`mailto:${email}`}
                        >
                          {email}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export function ProjectInquiryPage() {
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
            <form className="mt-7 grid gap-4">
              {["회사명 / 담당자", "연락처 / 이메일", "프로젝트 위치"].map(
                (label) => (
                  <label
                    key={label}
                    className="grid gap-2 text-sm font-black text-haein-950"
                  >
                    {label}
                    <input
                      className="min-h-12 rounded-lg border border-sky-100 bg-slate-50 px-4 text-haein-950 outline-none transition placeholder:text-slate-400 focus:border-haein-500 focus:bg-white"
                      placeholder={label}
                    />
                  </label>
                ),
              )}
              <label className="grid gap-2 text-sm font-black text-haein-950">
                문의 내용
                <textarea
                  className="min-h-36 rounded-lg border border-sky-100 bg-slate-50 px-4 py-3 text-haein-950 outline-none transition placeholder:text-slate-400 focus:border-haein-500 focus:bg-white"
                  placeholder="조사 분야, 일정, 필요한 산출물을 적어주세요."
                />
              </label>
              <a
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-haein-700 px-5 font-black text-white transition hover:-translate-y-1 hover:bg-haein-300"
                href="mailto:contact@haein.example?subject=HAEIN%20Project%20Inquiry"
              >
                상담 메일 보내기
              </a>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
