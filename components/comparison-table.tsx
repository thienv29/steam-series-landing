import { Check } from 'lucide-react'

export default function ComparisonTable() {
  const features = [
    { name: 'File sách định dạng PDF', standard: true, advanced: true },
    { name: 'Game tương tác với chú Sóc IZZY', standard: true, advanced: true },
    { name: 'Bài tập trắc nghiệm', standard: true, advanced: true },
    { name: 'Video', standard: false, advanced: true },
    { name: 'Tài liệu cấu trúc từ vựng', standard: false, advanced: true },
    {
      name: 'Chi phí',
      standard: '<s>80.000 VNĐ/ THÁNG</s><br />Miễn phí tặng kèm sách',
      advanced: '100.000 VNĐ/ THÁNG',
    },
  ]
  return (
    <section
      id='comparison'
      className='relative py-20 px-4 bg-white  overflow-hidden'
    >
      <img
        src='/izzy-front-view.png'
        alt='Izzy front view'
        className='absolute top-10 left-60 w-40 h-auto -rotate-6 hidden lg:block izzy-sway'
      />
      <div className='max-w-6xl mx-auto relative z-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-center'>
          Tài khoản học tập{' '}
        </h2>

        <div className='overflow-x-auto mt-8'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-border'>
                <th className='text-left py-4 px-6 font-semibold text-foreground'>
                  Tính năng
                </th>
                <th className='text-center py-4 px-6 font-semibold text-foreground'>
                  <div className='text-lg'>Tài khoản Tiêu chuẩn</div>
                  <div className='text-sm text-muted-foreground font-normal'>
                    Standard
                  </div>
                </th>
                <th className='text-center py-4 px-6 font-semibold text-foreground'>
                  <div className='text-lg'>Tài khoản Nâng cao</div>
                  <div className='text-sm text-muted-foreground font-normal'>
                    Advanced
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className='border-b border-border hover:bg-muted/50 transition'
                >
                  <td className='py-4 px-6 text-foreground'>{feature.name}</td>
                  <td className='py-4 px-6 text-center'>
                    {typeof feature.standard === 'boolean' ? (
                      feature.standard ? (
                        <Check className='w-5 h-5 text-primary mx-auto' />
                      ) : (
                        <span className='text-muted-foreground'>—</span>
                      )
                    ) : (
                      <span
                        className='text-foreground font-semibold'
                        dangerouslySetInnerHTML={{
                          __html: feature.standard as string,
                        }}
                      />
                    )}
                  </td>
                  <td className='py-4 px-6 text-center'>
                    {typeof feature.advanced === 'boolean' ? (
                      feature.advanced ? (
                        <Check className='w-5 h-5 text-primary mx-auto' />
                      ) : (
                        <span className='text-muted-foreground'>—</span>
                      )
                    ) : (
                      <span
                        className='text-foreground font-semibold'
                        dangerouslySetInnerHTML={{
                          __html: feature.advanced as string,
                        }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
