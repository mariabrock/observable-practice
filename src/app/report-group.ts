export class ReportGroup{
  id: number;
  displayName: string;
  uiHandle: string;
  groupName: string;
  reports: [
    {
      id: number,
      displayName: string,
      description: string,
      uiHandle: string,
      serviceUrl: string,
      ordering: number,
      groupId: number,
      pinned: boolean
    },
    {
      id: number,
      displayName: string,
      description: string,
      uiHandle: string,
      serviceUrl: string,
      ordering: number,
      groupId: number,
      pinned: boolean
    }
  ];
}
