import { useQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getLicenses } from "@/api/get-licenses";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CreateLicenseForm } from "./forms/create-license";
import { useState } from "react";

function Licenses() {
  const [isCreateLicenseOpen, setIsCreateLicenseOpen] = useState(false);

  const {
    data: result,
    isLoading: isLoadingLicenses,
    isFetching: isFetchingLicenses,
  } = useQuery({
    queryKey: ["licenses"],
    queryFn: () => getLicenses(),
  });

  if (isLoadingLicenses) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight">
          Licenses
          {isFetchingLicenses && (
            <Loader2Icon className="w-5 h-5 animate-spin text-muted-foreground" />
          )}
        </h1>
        <div className="space-y-2.5">
          <div className="flex justify-end">
            <Dialog
              onOpenChange={setIsCreateLicenseOpen}
              open={isCreateLicenseOpen}
            >
              <DialogTrigger asChild>
                <Button>
                  {/* <Plus className="h-3 w-3" /> */}
                  <span className="">Add License</span>
                </Button>
              </DialogTrigger>

              <CreateLicenseForm />
            </Dialog>
          </div>
          <div className="rounded-md">
            <DataTable
              columns={columns}
              data={result}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Licenses;
