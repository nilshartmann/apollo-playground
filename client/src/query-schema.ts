/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type ActivityState =
  "CREATED" |
  "STARTED" |
  "FINISHED";


export type ActivityQueryVariables = {
  projectId: string,
  currentActivityId: string,
};

export type ActivityQuery = {
  project:  {
    id: string,
    title: string,
    activities:  Array< {
      id: string,
      title: string,
      state: ActivityState,
    } >,
    currentActivity:  {
      id: string,
      title: string,
      state: ActivityState,
      description: string,
      nextAction: string | null,
      creator:  {
        id: string,
        name: string,
      },
      assignee:  {
        id: string,
        name: string,
      },
    },
  },
};

export type UserQuery = {
  // Return a list of all registered users
  users:  Array< {
    id: string,
    name: string,
    projects:  {
      totalCount: number,
    },
    activities:  {
      totalCount: number,
    },
  } >,
};

export type ProjectOverviewQuery = {
  // Return a list of all projects. Rembember: all projects are "public"
  // (and not visible to only it's owner)
  projects:  Array< {
    id: string,
    title: string,
    owner:  {
      name: string,
      id: string,
    },
    activities:  Array< {
      state: ActivityState,
    } >,
    latestActivity:  {
      id: string,
      title: string,
    },
  } > | null,
};

export type UserSummaryFragment = {
  id: string,
  name: string,
};
/* tslint:enable */
