import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/shipments/$shipmentId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/shipments/$shipmentId"!</div>
}
