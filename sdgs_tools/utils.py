from typing import List, Union


def parse_range(value: Union[str, int]) -> List[int]:
    results: List[int] = list()
    if isinstance(value, int):
        results.append(value)
    elif value.isdigit():
        results.append(int(value))
    elif "," in value:
        for val in value.split(","):
            # For 1,2
            results.extend(parse_range(val))
    elif "-" in value:
        start, end = value.split("-")
        if start.isdigit() and end.isdigit():
            if start == end:
                # For 1-1
                results.append(int(start))
            else:
                # For 1-2
                results.extend(range(int(start), int(end) + 1))
    return results
