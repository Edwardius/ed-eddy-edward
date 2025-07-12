import ButtondownSubscribeForm from './buttondown_subscribe_form'

export default function BlogSidebar() {
  return (
    <div className="w-1/4">
      <div className="flex items-center justify-center h-full">
        <div className="space-y-6 max-h-[80vh] overflow-hidden">
          <img
            src="/headshot.jpg"
            alt="Profile photo"
            className="rounded-full w-40 h-40 object-cover mx-auto"
          />
          <div className="text-sm font-mono text-gray-700">
            <p className="font-bold uppercase text-xs tracking-widest">About This Blog</p>
            <p className="mt-2">
              A collection of things I wanted to write about.
            </p>
            <p className="mt-2">
              I am well aware that I will most definitely sound like a cringe startup founder...
            </p>
            <p className="mt-2">
              Do not take anything I write about seriously... I beg you.
            </p>
          </div>
          <ButtondownSubscribeForm />
        </div>
      </div>
    </div>
  )
}
