/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YKDx6bs9ccd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, Card } from "@/components/ui/card"

export default function Timeline() {
  return (
    <div className="px-4 py-12 md:py-24 w-full mx-auto space-y-12">
      <div className="container space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">My Educational Journey</h1>
        <p className="text-gray-500 dark:text-gray-400">From the first day of school to the last day of college.</p>
      </div>
      <div className="container">
        <div>
          <div>
            <div>
              <GraduationCapIcon className="h-4 w-4" />
            </div>
            <div>
              <Card>
                <CardContent className="flex items-center space-x-4">
                  <img
                    alt="Harvard University"
                    className="rounded-full"
                    height="64"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <div className="space-y-1">
                    <h3 className="font-bold">Harvard University</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Bachelor of Arts in Computer Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2010 - 2014</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <div>
              <GraduationCapIcon className="h-4 w-4" />
            </div>
            <div>
              <Card>
                <CardContent className="flex items-center space-x-4">
                  <img
                    alt="MIT"
                    className="rounded-full"
                    height="64"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <div className="space-y-1">
                    <h3 className="font-bold">MIT</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Master of Science in Electrical Engineering
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2014 - 2016</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <div>
              <GraduationCapIcon className="h-4 w-4" />
            </div>
            <div>
              <Card>
                <CardContent className="flex items-center space-x-4">
                  <img
                    alt="Stanford University"
                    className="rounded-full"
                    height="64"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <div className="space-y-1">
                    <h3 className="font-bold">Stanford University</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ph.D. in Computer Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2016 - 2020</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GraduationCapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}
