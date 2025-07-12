import { HeartHandshake, NotebookPen } from 'lucide-react'
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
            <p className="pt-8 xl:pt-0 pb-4 uppercase font-600 text-4xl text-gray-800 font-title">Ed-itorials</p>
            <p className="text-sm font-500 text-gray-800 font-mono">
              <NotebookPen className='inline-block align-text-bottom'/> A collection of things I wanted to write about.
            </p>
            <p className="mt-2 text-sm font-300 text-gray-800 font-mono">
              I am well aware that I will most definitely sound like a cringe startup founder...
            </p>
            <p className="mt-2 text-sm font-300 text-gray-800 font-mono">
              Do not take anything I write about seriously... <span className="font-500">I beg you</span> <HeartHandshake className='inline-block align-text-bottom'/>
            </p>
          </div>
          <ButtondownSubscribeForm />
        </div>
      </div>
    </div>
  )
}
